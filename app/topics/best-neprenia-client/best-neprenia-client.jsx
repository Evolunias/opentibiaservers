import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-client');
}

export default function BestNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-client" />;
}
