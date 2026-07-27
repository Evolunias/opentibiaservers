import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-retro-server');
}

export default function Tibiantis96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-retro-server" />;
}
