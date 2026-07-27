import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-create-account');
}

export default function NewSeasonRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-create-account" />;
}
