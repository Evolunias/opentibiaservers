import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-create-account');
}

export default function NewSeasonSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-create-account" />;
}
