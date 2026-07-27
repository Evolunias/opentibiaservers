import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-uk');
}

export default function TibiascapePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-uk" />;
}
