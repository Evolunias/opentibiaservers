import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-create-account');
}

export default function TopLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-create-account" />;
}
