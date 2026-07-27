import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-ots');
}

export default function BestOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-ots" />;
}
