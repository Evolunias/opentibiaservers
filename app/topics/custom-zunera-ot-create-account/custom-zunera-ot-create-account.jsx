import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-create-account');
}

export default function CustomZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-create-account" />;
}
