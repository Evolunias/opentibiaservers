import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-client');
}

export default function OfficialInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-client" />;
}
