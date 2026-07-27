import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-create-account');
}

export default function PopularTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-create-account" />;
}
