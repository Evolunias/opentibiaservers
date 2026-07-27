import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-create-account');
}

export default function BestThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-create-account" />;
}
