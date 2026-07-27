import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-login');
}

export default function OfficialCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-login" />;
}
