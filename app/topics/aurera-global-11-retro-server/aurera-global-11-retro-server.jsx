import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-retro-server');
}

export default function AureraGlobal11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-retro-server" />;
}
