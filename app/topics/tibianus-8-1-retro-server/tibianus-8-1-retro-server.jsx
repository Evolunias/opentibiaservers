import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-retro-server');
}

export default function Tibianus81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-retro-server" />;
}
