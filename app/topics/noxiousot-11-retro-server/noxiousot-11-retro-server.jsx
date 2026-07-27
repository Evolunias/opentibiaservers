import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-retro-server');
}

export default function Noxiousot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-retro-server" />;
}
