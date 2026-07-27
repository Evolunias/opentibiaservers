import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-client');
}

export default function ActiveZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-client" />;
}
