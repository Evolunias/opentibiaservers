import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-login');
}

export default function OfficialNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-login" />;
}
