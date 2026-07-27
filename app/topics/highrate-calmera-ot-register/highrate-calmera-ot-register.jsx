import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-register');
}

export default function HighrateCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-register" />;
}
