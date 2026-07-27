import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-retro-server');
}

export default function Oxygenot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-retro-server" />;
}
