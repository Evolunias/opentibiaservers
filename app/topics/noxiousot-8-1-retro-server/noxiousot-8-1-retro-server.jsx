import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-retro-server');
}

export default function Noxiousot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-retro-server" />;
}
