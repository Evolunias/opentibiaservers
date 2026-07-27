import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-mexico-server');
}

export default function TibianusMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-mexico-server" />;
}
