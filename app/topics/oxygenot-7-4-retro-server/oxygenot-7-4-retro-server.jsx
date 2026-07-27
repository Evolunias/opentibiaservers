import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-retro-server');
}

export default function Oxygenot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-retro-server" />;
}
