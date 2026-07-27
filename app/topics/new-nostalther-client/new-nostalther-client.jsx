import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-client');
}

export default function NewNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-client" />;
}
