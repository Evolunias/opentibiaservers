import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-sweden-server');
}

export default function NoxiousotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-sweden-server" />;
}
