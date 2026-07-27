import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-ot');
}

export default function BestOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-ot" />;
}
