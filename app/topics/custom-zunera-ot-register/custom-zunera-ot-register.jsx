import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-register');
}

export default function CustomZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-register" />;
}
