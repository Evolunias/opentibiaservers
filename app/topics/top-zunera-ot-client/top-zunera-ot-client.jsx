import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-client');
}

export default function TopZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-client" />;
}
