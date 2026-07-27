import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-client');
}

export default function BestInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-client" />;
}
