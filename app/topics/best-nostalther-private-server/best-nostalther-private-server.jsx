import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-private-server');
}

export default function BestNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-private-server" />;
}
