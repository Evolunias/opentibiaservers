import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-create-account');
}

export default function ActiveZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-create-account" />;
}
