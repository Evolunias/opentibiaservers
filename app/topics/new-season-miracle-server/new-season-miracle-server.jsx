import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-server');
}

export default function NewSeasonMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-server" />;
}
