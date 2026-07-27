import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-retro-server');
}

export default function Noxiousot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-retro-server" />;
}
