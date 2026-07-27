import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global');
}

export default function BestAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global" />;
}
