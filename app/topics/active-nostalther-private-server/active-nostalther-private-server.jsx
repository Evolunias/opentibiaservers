import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-private-server');
}

export default function ActiveNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-private-server" />;
}
