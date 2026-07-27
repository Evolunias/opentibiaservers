import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-create-account');
}

export default function LowrateLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-create-account" />;
}
