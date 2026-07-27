import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-server');
}

export default function TopNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-server" />;
}
