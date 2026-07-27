import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-ots');
}

export default function NewSeasonMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-ots" />;
}
