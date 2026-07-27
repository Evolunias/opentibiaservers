import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-retro-server');
}

export default function AureraGlobal15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-retro-server" />;
}
