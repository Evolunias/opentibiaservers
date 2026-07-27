import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-uk');
}

export default function TibiascapeRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-uk" />;
}
