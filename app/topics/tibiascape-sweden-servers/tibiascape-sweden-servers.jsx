import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-sweden-servers');
}

export default function TibiascapeSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-sweden-servers" />;
}
