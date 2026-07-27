import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-client');
}

export default function NewZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-client" />;
}
