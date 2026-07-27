import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-retro-server');
}

export default function Kasteria12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-retro-server" />;
}
