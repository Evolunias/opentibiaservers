import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-create-account');
}

export default function ActiveMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-create-account" />;
}
