import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-retro-server');
}

export default function Tibiantis772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-retro-server" />;
}
