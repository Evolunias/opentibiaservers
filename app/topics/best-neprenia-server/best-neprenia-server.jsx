import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-server');
}

export default function BestNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-server" />;
}
