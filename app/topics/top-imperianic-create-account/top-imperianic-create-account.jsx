import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-create-account');
}

export default function TopImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-create-account" />;
}
