import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-ots');
}

export default function TopOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-ots" />;
}
