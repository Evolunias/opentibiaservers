import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-private-server');
}

export default function TibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-private-server" />;
}
