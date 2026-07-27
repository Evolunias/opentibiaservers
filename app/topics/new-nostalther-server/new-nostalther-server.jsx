import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-server');
}

export default function NewNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-server" />;
}
