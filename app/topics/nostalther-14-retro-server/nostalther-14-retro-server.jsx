import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-retro-server');
}

export default function Nostalther14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-retro-server" />;
}
