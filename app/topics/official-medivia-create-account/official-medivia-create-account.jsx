import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-create-account');
}

export default function OfficialMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-create-account" />;
}
