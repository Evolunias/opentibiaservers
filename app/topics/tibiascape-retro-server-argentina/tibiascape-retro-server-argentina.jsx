import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-argentina');
}

export default function TibiascapeRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-argentina" />;
}
