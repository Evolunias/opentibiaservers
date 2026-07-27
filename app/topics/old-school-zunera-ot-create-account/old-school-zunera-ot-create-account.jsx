import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-create-account');
}

export default function OldSchoolZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-create-account" />;
}
