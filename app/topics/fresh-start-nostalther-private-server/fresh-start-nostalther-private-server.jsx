import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-private-server');
}

export default function FreshStartNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-private-server" />;
}
