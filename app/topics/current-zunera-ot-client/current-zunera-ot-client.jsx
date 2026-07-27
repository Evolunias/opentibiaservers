import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-client');
}

export default function CurrentZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-client" />;
}
