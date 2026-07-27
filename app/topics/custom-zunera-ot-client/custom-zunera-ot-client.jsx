import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-client');
}

export default function CustomZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-client" />;
}
