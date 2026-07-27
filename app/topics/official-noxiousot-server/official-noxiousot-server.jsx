import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-server');
}

export default function OfficialNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-server" />;
}
