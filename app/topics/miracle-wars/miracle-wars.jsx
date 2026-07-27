import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-wars');
}

export default function MiracleWarsKeywordPage() {
  return <StaticKeywordPage slug="miracle-wars" />;
}
