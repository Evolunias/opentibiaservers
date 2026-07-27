import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-retro-server');
}

export default function Tibiantis854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-retro-server" />;
}
