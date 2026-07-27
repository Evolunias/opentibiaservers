import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-ot-server');
}

export default function NewSeasonClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-ot-server" />;
}
