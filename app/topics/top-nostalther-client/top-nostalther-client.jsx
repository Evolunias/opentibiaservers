import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-client');
}

export default function TopNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-client" />;
}
