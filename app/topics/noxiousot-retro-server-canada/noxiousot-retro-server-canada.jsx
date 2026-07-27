import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-canada');
}

export default function NoxiousotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-canada" />;
}
