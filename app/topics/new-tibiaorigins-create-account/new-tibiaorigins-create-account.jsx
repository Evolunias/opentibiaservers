import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-create-account');
}

export default function NewTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-create-account" />;
}
