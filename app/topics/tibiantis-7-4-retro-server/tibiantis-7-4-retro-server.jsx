import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-retro-server');
}

export default function Tibiantis74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-retro-server" />;
}
