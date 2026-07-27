import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-server');
}

export default function CurrentRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-server" />;
}
