import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-ots');
}

export default function BestAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-ots" />;
}
