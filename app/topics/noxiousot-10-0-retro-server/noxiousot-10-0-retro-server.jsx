import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-retro-server');
}

export default function Noxiousot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-retro-server" />;
}
