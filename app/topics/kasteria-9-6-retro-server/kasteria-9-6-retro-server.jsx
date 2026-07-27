import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-retro-server');
}

export default function Kasteria96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-retro-server" />;
}
