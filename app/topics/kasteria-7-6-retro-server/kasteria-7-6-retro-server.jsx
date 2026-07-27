import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-retro-server');
}

export default function Kasteria76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-retro-server" />;
}
