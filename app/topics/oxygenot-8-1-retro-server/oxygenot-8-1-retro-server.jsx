import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-retro-server');
}

export default function Oxygenot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-retro-server" />;
}
