import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-client');
}

export default function FreshStartInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-client" />;
}
