import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-ots');
}

export default function LowrateCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-ots" />;
}
