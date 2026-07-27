import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-server');
}

export default function HighrateCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-server" />;
}
