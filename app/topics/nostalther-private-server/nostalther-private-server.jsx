import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-private-server');
}

export default function NostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-private-server" />;
}
