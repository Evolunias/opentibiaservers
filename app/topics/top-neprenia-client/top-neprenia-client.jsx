import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-client');
}

export default function TopNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-client" />;
}
