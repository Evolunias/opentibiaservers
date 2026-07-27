import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-europe');
}

export default function TibiaoriginsPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-europe" />;
}
