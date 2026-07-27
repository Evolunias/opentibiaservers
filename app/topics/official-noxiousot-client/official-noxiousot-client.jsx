import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-client');
}

export default function OfficialNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-client" />;
}
