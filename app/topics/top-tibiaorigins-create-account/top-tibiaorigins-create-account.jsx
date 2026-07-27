import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-create-account');
}

export default function TopTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-create-account" />;
}
