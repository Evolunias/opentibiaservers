import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-client');
}

export default function CustomInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-client" />;
}
