import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-retro-server');
}

export default function Oxygenot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-retro-server" />;
}
