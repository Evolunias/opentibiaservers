import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-wars');
}

export default function PremiaWarsKeywordPage() {
  return <StaticKeywordPage slug="premia-wars" />;
}
