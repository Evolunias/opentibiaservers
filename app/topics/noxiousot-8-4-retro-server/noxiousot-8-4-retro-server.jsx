import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-retro-server');
}

export default function Noxiousot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-retro-server" />;
}
