import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-server');
}

export default function CurrentRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="current-realera-server" />;
}
