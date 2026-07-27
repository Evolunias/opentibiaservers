import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-login');
}

export default function OfficialSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-login" />;
}
