import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-login');
}

export default function TopNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-login" />;
}
