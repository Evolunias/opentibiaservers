import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-create-account');
}

export default function PopularThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-create-account" />;
}
