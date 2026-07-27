import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-retro-server');
}

export default function Tibianus1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-retro-server" />;
}
