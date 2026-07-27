import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-latin-america');
}

export default function TibiaoriginsPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-latin-america" />;
}
