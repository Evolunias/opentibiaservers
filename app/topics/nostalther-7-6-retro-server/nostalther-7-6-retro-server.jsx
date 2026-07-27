import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-6-retro-server');
}

export default function Nostalther76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-6-retro-server" />;
}
