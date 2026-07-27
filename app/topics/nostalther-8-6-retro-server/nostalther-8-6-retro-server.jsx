import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-retro-server');
}

export default function Nostalther86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-retro-server" />;
}
