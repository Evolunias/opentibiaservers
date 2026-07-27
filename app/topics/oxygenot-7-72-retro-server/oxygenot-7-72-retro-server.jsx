import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-retro-server');
}

export default function Oxygenot772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-retro-server" />;
}
