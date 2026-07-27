import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-season');
}

export default function AmeriaSeasonKeywordPage() {
  return <StaticKeywordPage slug="ameria-season" />;
}
