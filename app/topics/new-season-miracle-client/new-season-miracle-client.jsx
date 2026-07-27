import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-client');
}

export default function NewSeasonMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-client" />;
}
