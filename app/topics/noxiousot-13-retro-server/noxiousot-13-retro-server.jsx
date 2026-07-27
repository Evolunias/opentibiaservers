import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-retro-server');
}

export default function Noxiousot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-retro-server" />;
}
