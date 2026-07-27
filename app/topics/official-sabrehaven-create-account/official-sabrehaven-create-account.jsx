import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-create-account');
}

export default function OfficialSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-create-account" />;
}
