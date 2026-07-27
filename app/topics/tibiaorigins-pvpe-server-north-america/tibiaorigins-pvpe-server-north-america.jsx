import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-north-america');
}

export default function TibiaoriginsPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-north-america" />;
}
