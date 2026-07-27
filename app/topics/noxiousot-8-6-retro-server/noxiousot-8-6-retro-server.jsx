import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-retro-server');
}

export default function Noxiousot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-retro-server" />;
}
