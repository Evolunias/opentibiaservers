import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-zunera-ot-server');
}

export default function LowExpZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-zunera-ot-server" />;
}
