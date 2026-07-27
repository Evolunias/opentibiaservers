import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-retro-server');
}

export default function Oxygenot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-retro-server" />;
}
