import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fun-server');
}

export default function TibiascapeFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fun-server" />;
}
