import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-6-retro-server');
}

export default function AureraGlobal76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-6-retro-server" />;
}
