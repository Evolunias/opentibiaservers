import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-uk');
}

export default function TibiaoriginsPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-uk" />;
}
