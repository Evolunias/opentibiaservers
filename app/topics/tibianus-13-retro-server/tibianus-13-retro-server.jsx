import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-retro-server');
}

export default function Tibianus13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-retro-server" />;
}
