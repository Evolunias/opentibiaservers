import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-server');
}

export default function PopularNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-server" />;
}
