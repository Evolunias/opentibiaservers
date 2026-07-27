import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-europe');
}

export default function NoxiousotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-europe" />;
}
