import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-private-server');
}

export default function TopNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-private-server" />;
}
