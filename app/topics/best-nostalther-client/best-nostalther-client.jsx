import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-client');
}

export default function BestNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-client" />;
}
