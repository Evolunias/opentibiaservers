import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-client');
}

export default function TopRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-client" />;
}
