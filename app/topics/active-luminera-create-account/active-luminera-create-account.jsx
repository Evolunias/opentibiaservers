import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-create-account');
}

export default function ActiveLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-create-account" />;
}
