import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-germany');
}

export default function NoxiousotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-germany" />;
}
