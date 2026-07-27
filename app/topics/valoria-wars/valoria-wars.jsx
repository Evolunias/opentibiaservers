import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-wars');
}

export default function ValoriaWarsKeywordPage() {
  return <StaticKeywordPage slug="valoria-wars" />;
}
