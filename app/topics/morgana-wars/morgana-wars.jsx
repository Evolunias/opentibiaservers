import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-wars');
}

export default function MorganaWarsKeywordPage() {
  return <StaticKeywordPage slug="morgana-wars" />;
}
