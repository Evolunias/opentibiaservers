import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-brazil-server');
}

export default function TibiascapeBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-brazil-server" />;
}
