import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-retro-server');
}

export default function Tibianus80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-retro-server" />;
}
