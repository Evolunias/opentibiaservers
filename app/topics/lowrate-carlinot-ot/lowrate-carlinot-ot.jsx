import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-ot');
}

export default function LowrateCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-ot" />;
}
