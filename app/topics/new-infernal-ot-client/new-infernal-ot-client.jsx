import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-client');
}

export default function NewInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-client" />;
}
