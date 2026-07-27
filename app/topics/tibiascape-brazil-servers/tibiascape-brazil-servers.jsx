import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-brazil-servers');
}

export default function TibiascapeBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-brazil-servers" />;
}
