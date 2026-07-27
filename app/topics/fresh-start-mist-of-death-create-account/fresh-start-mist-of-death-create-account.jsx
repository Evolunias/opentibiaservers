import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-create-account');
}

export default function FreshStartMistOfDeathCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-create-account" />;
}
