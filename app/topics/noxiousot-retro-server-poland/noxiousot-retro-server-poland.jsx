import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-poland');
}

export default function NoxiousotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-poland" />;
}
