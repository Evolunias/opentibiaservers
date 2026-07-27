import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-login');
}

export default function PopularImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-login" />;
}
