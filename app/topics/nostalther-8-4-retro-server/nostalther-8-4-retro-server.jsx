import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-retro-server');
}

export default function Nostalther84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-retro-server" />;
}
