import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-server');
}

export default function TopRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-server" />;
}
