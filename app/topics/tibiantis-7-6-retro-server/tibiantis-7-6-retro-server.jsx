import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-retro-server');
}

export default function Tibiantis76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-retro-server" />;
}
