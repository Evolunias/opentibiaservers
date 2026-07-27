import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-register');
}

export default function OfficialSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-register" />;
}
