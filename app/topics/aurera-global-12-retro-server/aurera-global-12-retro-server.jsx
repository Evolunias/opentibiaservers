import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-retro-server');
}

export default function AureraGlobal12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-retro-server" />;
}
