import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-create-account');
}

export default function NewZuneraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-create-account" />;
}
