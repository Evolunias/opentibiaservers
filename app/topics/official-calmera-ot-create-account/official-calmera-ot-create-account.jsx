import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-create-account');
}

export default function OfficialCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-create-account" />;
}
