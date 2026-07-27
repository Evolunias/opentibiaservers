import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-create-account');
}

export default function MistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-create-account" />;
}
