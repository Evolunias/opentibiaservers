import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-create-account');
}

export default function PopularLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-create-account" />;
}
