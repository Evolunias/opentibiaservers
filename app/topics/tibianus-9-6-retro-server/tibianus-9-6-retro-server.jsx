import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-retro-server');
}

export default function Tibianus96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-retro-server" />;
}
