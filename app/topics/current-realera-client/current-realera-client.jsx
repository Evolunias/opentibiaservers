import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-client');
}

export default function CurrentRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="current-realera-client" />;
}
