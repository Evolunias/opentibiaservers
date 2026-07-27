import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-argentina-servers');
}

export default function NoxiousotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-argentina-servers" />;
}
