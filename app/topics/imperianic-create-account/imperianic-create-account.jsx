import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-create-account');
}

export default function ImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="imperianic-create-account" />;
}
