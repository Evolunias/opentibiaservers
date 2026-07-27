import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-mexico');
}

export default function NoxiousotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-mexico" />;
}
