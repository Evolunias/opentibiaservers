import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-retro-server');
}

export default function Kasteria80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-retro-server" />;
}
