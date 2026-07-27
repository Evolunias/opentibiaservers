import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-retro-server');
}

export default function Kasteria100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-retro-server" />;
}
