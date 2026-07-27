import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-register');
}

export default function OfficialMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-register" />;
}
