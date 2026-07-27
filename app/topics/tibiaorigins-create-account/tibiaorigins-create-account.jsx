import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-create-account');
}

export default function TibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-create-account" />;
}
