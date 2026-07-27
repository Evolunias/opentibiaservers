import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-sweden-server');
}

export default function TibiascapeSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-sweden-server" />;
}
