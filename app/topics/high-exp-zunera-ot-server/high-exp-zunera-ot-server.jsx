import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-zunera-ot-server');
}

export default function HighExpZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-zunera-ot-server" />;
}
