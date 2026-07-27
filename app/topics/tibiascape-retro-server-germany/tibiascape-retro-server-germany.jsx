import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-germany');
}

export default function TibiascapeRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-germany" />;
}
