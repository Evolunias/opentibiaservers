import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-private-server');
}

export default function NewSeasonInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-private-server" />;
}
