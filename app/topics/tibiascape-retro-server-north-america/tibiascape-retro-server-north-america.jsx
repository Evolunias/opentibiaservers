import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-north-america');
}

export default function TibiascapeRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-north-america" />;
}
