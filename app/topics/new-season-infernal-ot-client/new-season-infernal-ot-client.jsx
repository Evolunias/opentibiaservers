import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-client');
}

export default function NewSeasonInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-client" />;
}
