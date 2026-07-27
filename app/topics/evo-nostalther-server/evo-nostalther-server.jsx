import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nostalther-server');
}

export default function EvoNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="evo-nostalther-server" />;
}
