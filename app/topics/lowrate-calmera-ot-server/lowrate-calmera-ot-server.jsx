import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-server');
}

export default function LowrateCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-server" />;
}
