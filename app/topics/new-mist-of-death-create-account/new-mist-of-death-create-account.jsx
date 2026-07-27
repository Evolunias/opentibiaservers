import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-create-account');
}

export default function NewMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-create-account" />;
}
