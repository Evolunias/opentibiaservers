import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-poland');
}

export default function TibiascapeRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-poland" />;
}
