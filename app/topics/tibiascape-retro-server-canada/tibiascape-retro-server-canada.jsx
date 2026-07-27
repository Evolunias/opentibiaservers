import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-canada');
}

export default function TibiascapeRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-canada" />;
}
