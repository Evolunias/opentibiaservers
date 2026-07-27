import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-retro-server');
}

export default function Oxygenot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-retro-server" />;
}
