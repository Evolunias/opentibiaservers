import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-retro-server');
}

export default function Noxiousot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-retro-server" />;
}
