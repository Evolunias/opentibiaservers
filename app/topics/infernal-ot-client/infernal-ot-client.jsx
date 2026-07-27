import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-client');
}

export default function InfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-client" />;
}
