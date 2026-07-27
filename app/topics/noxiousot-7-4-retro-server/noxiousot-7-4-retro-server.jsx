import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-retro-server');
}

export default function Noxiousot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-retro-server" />;
}
