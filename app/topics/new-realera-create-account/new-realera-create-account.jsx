import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-create-account');
}

export default function NewRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-realera-create-account" />;
}
