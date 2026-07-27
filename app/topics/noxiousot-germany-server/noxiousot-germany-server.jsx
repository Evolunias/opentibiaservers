import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-germany-server');
}

export default function NoxiousotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-germany-server" />;
}
