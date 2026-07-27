import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-retro-server');
}

export default function Tibianus15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-retro-server" />;
}
