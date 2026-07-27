import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-ots');
}

export default function LowrateAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-ots" />;
}
