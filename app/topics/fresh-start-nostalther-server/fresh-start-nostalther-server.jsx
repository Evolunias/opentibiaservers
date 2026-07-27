import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-server');
}

export default function FreshStartNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-server" />;
}
