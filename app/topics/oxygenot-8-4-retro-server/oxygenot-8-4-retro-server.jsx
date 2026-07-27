import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-retro-server');
}

export default function Oxygenot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-retro-server" />;
}
