import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-private-server');
}

export default function LowrateNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-private-server" />;
}
