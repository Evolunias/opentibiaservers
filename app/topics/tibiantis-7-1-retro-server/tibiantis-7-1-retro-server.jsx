import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-retro-server');
}

export default function Tibiantis71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-retro-server" />;
}
