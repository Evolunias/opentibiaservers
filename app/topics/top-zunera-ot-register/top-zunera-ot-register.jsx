import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-register');
}

export default function TopZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-register" />;
}
