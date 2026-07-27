import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-retro-server');
}

export default function Tibiantis81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-retro-server" />;
}
