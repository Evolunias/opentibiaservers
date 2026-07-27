import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-retro-server');
}

export default function Oxygenot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-retro-server" />;
}
