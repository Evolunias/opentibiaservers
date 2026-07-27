import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-login');
}

export default function HighrateCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-login" />;
}
