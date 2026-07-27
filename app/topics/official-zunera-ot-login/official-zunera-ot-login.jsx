import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-login');
}

export default function OfficialZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-login" />;
}
