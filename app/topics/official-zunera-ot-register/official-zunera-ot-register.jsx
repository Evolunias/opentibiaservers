import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-register');
}

export default function OfficialZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-register" />;
}
