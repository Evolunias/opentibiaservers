import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-server');
}

export default function CurrentNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-server" />;
}
