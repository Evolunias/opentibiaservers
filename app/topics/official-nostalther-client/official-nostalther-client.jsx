import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-client');
}

export default function OfficialNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-client" />;
}
