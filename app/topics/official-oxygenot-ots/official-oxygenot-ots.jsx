import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-ots');
}

export default function OfficialOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-ots" />;
}
