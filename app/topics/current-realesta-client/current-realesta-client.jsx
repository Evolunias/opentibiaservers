import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-client');
}

export default function CurrentRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-client" />;
}
