import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-retro-server');
}

export default function Kasteria86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-retro-server" />;
}
