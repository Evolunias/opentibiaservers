import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-create-account');
}

export default function FreshStartRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-create-account" />;
}
