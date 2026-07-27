import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-argentina');
}

export default function NoxiousotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-argentina" />;
}
