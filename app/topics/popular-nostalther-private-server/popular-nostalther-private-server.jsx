import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-private-server');
}

export default function PopularNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-private-server" />;
}
