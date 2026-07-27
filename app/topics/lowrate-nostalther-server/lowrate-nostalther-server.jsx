import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-server');
}

export default function LowrateNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-server" />;
}
