import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-mexico-servers');
}

export default function TibianusMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-mexico-servers" />;
}
