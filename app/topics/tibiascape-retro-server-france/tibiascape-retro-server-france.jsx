import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-france');
}

export default function TibiascapeRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-france" />;
}
