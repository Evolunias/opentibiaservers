import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-client');
}

export default function FreshStartNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-client" />;
}
