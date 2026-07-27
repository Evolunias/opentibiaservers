import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-retro-server');
}

export default function Noxiousot71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-retro-server" />;
}
