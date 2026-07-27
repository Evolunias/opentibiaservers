import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-retro-server');
}

export default function Oxygenot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-retro-server" />;
}
