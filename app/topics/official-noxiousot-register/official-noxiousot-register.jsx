import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-register');
}

export default function OfficialNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-register" />;
}
