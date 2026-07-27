import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-login');
}

export default function HighrateZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-login" />;
}
