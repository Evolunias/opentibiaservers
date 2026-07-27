import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-login');
}

export default function BestNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-login" />;
}
