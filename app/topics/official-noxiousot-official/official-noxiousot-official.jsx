import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-official');
}

export default function OfficialNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-official" />;
}
