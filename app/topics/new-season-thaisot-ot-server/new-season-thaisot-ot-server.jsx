import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-ot-server');
}

export default function NewSeasonThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-ot-server" />;
}
