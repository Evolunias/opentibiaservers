import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-retro-server');
}

export default function Noxiousot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-retro-server" />;
}
