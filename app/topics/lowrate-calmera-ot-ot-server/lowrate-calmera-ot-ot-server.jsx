import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-ot-server');
}

export default function LowrateCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-ot-server" />;
}
