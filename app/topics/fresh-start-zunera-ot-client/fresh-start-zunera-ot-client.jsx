import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-client');
}

export default function FreshStartZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-client" />;
}
