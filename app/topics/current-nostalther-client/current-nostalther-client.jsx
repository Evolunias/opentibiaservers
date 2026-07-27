import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-client');
}

export default function CurrentNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-client" />;
}
