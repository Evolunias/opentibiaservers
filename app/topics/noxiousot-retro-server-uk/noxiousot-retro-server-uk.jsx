import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-uk');
}

export default function NoxiousotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-uk" />;
}
