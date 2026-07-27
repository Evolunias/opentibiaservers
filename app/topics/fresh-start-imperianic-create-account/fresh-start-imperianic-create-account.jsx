import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-create-account');
}

export default function FreshStartImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-create-account" />;
}
