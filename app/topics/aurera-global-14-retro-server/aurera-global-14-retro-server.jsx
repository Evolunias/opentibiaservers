import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-retro-server');
}

export default function AureraGlobal14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-retro-server" />;
}
