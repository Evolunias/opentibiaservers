import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-server');
}

export default function TopRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="top-realera-server" />;
}
