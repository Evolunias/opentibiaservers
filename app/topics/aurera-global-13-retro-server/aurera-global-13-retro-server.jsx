import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-retro-server');
}

export default function AureraGlobal13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-retro-server" />;
}
