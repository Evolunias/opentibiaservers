import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-create-account');
}

export default function LowrateMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-create-account" />;
}
