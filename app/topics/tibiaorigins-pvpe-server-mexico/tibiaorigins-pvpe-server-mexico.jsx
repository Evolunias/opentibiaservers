import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-mexico');
}

export default function TibiaoriginsPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-mexico" />;
}
