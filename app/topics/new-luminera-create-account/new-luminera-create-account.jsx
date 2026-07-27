import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-create-account');
}

export default function NewLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-create-account" />;
}
