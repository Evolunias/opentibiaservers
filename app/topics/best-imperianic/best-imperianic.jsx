import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic');
}

export default function BestImperianicKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic" />;
}
