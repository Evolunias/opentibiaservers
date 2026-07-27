import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-create-account');
}

export default function NewSeasonTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-create-account" />;
}
