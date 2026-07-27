import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-brazil');
}

export default function TibiascapeRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-brazil" />;
}
