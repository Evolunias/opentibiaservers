import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-create-account');
}

export default function CurrentTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-create-account" />;
}
