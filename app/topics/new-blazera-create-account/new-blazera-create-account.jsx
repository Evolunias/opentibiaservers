import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-create-account');
}

export default function NewBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-create-account" />;
}
