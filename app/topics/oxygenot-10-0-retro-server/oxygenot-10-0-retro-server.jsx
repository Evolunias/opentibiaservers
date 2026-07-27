import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-retro-server');
}

export default function Oxygenot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-retro-server" />;
}
