import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-europe');
}

export default function TibiascapeRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-europe" />;
}
