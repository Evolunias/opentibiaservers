import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-register');
}

export default function OfficialCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-register" />;
}
