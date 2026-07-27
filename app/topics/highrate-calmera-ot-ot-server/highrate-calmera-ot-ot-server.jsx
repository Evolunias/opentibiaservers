import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-ot-server');
}

export default function HighrateCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-ot-server" />;
}
