import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-client');
}

export default function ActiveInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-client" />;
}
