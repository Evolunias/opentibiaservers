import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-ot');
}

export default function OfficialNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-ot" />;
}
