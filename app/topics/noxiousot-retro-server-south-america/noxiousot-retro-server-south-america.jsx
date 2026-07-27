import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-south-america');
}

export default function NoxiousotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-south-america" />;
}
