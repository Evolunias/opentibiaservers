import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-server');
}

export default function NewSeasonInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-server" />;
}
