import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-login');
}

export default function PopularThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-login" />;
}
