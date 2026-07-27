import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-create-account');
}

export default function BestTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-create-account" />;
}
