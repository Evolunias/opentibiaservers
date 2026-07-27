import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-ot-server');
}

export default function LowrateEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-ot-server" />;
}
