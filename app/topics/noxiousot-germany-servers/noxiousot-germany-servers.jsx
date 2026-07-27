import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-germany-servers');
}

export default function NoxiousotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-germany-servers" />;
}
