import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-ot');
}

export default function LowrateAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-ot" />;
}
