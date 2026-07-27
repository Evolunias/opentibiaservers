import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-private-server');
}

export default function NewSeasonMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-private-server" />;
}
