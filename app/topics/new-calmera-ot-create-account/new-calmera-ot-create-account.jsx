import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-create-account');
}

export default function NewCalmeraOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-create-account" />;
}
