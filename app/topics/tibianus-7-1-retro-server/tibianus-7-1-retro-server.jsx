import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-retro-server');
}

export default function Tibianus71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-retro-server" />;
}
