import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-create-account');
}

export default function TopThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-create-account" />;
}
