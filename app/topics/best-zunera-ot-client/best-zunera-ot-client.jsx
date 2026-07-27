import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-client');
}

export default function BestZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-client" />;
}
