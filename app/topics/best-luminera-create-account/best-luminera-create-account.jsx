import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-create-account');
}

export default function BestLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-create-account" />;
}
