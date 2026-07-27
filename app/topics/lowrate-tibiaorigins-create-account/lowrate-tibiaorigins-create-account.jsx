import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-create-account');
}

export default function LowrateTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-create-account" />;
}
