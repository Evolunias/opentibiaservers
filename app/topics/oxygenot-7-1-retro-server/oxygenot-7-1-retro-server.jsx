import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-retro-server');
}

export default function Oxygenot71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-retro-server" />;
}
