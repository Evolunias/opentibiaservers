import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-sweden');
}

export default function TibiascapeRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-sweden" />;
}
