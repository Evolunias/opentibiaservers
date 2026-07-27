import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-client');
}

export default function TopRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="top-realera-client" />;
}
