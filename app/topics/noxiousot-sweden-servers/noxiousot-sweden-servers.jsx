import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-sweden-servers');
}

export default function NoxiousotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-sweden-servers" />;
}
