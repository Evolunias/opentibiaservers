import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-usa');
}

export default function TibiascapeRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-usa" />;
}
