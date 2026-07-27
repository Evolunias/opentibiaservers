import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-retro-server');
}

export default function Tibiantis13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-retro-server" />;
}
