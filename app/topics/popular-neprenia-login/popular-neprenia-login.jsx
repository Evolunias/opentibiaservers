import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-login');
}

export default function PopularNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-login" />;
}
