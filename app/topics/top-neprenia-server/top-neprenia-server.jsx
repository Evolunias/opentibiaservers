import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-server');
}

export default function TopNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-server" />;
}
