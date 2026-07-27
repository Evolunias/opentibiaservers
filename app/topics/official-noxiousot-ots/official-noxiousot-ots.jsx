import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-ots');
}

export default function OfficialNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-ots" />;
}
