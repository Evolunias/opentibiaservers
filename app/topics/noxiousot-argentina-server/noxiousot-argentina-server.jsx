import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-argentina-server');
}

export default function NoxiousotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-argentina-server" />;
}
