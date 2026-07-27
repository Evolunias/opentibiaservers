import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-ot-server');
}

export default function NewSeasonMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-ot-server" />;
}
