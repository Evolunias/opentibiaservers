import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-server');
}

export default function LowrateZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-server" />;
}
