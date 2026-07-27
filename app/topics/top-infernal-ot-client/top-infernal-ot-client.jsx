import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-client');
}

export default function TopInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-client" />;
}
