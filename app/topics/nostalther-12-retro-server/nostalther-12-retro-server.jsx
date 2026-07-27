import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-retro-server');
}

export default function Nostalther12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-retro-server" />;
}
