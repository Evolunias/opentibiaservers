import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-login');
}

export default function TopThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-login" />;
}
