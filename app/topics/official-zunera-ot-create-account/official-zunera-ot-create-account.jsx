import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-create-account');
}

export default function OfficialZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-create-account" />;
}
