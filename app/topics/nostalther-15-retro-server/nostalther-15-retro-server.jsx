import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-retro-server');
}

export default function Nostalther15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-retro-server" />;
}
