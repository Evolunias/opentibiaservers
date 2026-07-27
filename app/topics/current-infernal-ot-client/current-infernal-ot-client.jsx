import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-client');
}

export default function CurrentInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-client" />;
}
