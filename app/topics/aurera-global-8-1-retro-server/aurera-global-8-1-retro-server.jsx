import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-retro-server');
}

export default function AureraGlobal81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-retro-server" />;
}
