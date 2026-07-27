import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-world');
}

export default function PremiaWorldKeywordPage() {
  return <StaticKeywordPage slug="premia-world" />;
}
