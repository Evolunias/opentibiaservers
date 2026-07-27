import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-retro-server');
}

export default function AureraGlobal74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-retro-server" />;
}
