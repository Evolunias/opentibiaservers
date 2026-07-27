import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-retro-server');
}

export default function Oxygenot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-retro-server" />;
}
