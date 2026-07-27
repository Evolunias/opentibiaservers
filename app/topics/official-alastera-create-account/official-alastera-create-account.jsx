import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-create-account');
}

export default function OfficialAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-create-account" />;
}
