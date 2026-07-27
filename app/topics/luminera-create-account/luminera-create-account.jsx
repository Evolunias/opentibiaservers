import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-create-account');
}

export default function LumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="luminera-create-account" />;
}
