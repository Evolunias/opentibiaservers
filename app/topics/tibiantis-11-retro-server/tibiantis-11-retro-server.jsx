import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-retro-server');
}

export default function Tibiantis11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-retro-server" />;
}
