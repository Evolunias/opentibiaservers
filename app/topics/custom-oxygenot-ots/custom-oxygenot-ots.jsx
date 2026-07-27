import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-ots');
}

export default function CustomOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-ots" />;
}
