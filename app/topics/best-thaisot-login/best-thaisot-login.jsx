import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-login');
}

export default function BestThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-login" />;
}
