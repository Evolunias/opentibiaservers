import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-client');
}

export default function CurrentNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-client" />;
}
