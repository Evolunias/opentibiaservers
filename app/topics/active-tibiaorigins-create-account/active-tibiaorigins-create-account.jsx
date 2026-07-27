import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-create-account');
}

export default function ActiveTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-create-account" />;
}
