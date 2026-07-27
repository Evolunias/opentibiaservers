import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-create-account');
}

export default function FreshStartThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-create-account" />;
}
