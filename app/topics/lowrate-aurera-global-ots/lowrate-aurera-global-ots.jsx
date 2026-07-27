import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-ots');
}

export default function LowrateAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-ots" />;
}
