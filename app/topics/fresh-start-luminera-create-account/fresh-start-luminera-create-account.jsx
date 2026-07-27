import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-create-account');
}

export default function FreshStartLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-create-account" />;
}
