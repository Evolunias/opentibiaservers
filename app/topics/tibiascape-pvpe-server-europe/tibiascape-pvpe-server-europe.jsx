import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-europe');
}

export default function TibiascapePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-europe" />;
}
