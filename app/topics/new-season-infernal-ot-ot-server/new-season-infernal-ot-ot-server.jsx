import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-ot-server');
}

export default function NewSeasonInfernalOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-ot-server" />;
}
