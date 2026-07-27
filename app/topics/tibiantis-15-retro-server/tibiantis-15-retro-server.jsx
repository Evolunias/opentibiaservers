import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-retro-server');
}

export default function Tibiantis15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-retro-server" />;
}
