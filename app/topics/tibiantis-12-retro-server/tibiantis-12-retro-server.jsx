import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-retro-server');
}

export default function Tibiantis12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-retro-server" />;
}
