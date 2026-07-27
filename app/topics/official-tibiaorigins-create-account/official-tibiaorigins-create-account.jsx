import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-create-account');
}

export default function OfficialTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-create-account" />;
}
