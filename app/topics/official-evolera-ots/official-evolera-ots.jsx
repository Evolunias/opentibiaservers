import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-ots');
}

export default function OfficialEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-ots" />;
}
