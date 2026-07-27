import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-retro-server');
}

export default function Oxygenot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-retro-server" />;
}
