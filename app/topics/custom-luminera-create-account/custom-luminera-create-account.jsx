import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-create-account');
}

export default function CustomLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-create-account" />;
}
