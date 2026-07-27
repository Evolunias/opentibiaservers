import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-retro-server');
}

export default function Tibiantis86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-retro-server" />;
}
