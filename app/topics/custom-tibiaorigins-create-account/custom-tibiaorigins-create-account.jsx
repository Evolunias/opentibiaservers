import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-create-account');
}

export default function CustomTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-create-account" />;
}
