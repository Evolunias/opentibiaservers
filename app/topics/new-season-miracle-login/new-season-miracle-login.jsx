import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-login');
}

export default function NewSeasonMiracleLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-login" />;
}
