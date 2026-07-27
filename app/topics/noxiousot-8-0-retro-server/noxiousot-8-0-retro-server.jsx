import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-retro-server');
}

export default function Noxiousot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-retro-server" />;
}
