import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-retro-server');
}

export default function AureraGlobal100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-retro-server" />;
}
