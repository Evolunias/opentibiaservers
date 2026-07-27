import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-retro-server');
}

export default function Tibianus12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-retro-server" />;
}
