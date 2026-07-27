import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-argentina');
}

export default function NoxiousotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-argentina" />;
}
