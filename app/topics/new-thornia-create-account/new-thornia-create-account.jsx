import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-create-account');
}

export default function NewThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-create-account" />;
}
