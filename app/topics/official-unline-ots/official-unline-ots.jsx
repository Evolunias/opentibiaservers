import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-ots');
}

export default function OfficialUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="official-unline-ots" />;
}
