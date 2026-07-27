import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-ot');
}

export default function CurrentOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-ot" />;
}
