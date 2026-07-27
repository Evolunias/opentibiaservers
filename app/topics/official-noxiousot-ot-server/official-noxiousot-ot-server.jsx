import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-ot-server');
}

export default function OfficialNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-ot-server" />;
}
