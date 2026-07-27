import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-create-account');
}

export default function NewImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-create-account" />;
}
