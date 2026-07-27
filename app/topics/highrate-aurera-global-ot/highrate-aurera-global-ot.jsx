import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-ot');
}

export default function HighrateAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-ot" />;
}
