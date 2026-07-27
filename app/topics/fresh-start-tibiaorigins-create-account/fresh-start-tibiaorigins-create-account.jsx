import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-create-account');
}

export default function FreshStartTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-create-account" />;
}
