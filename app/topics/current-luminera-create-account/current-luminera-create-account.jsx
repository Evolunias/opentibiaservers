import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-create-account');
}

export default function CurrentLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-create-account" />;
}
