import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-usa');
}

export default function TibiaoriginsPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-usa" />;
}
