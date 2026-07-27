import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-ot');
}

export default function LowrateYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-ot" />;
}
