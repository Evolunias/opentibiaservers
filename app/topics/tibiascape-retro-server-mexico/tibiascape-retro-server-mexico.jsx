import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-mexico');
}

export default function TibiascapeRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-mexico" />;
}
