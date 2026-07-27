import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-private-server');
}

export default function CustomNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-private-server" />;
}
