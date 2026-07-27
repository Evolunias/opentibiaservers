import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-private-server');
}

export default function LowrateCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-private-server" />;
}
