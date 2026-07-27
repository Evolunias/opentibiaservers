import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-login');
}

export default function OfficialCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-login" />;
}
