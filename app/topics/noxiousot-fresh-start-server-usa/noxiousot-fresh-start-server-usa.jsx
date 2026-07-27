import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-usa');
}

export default function NoxiousotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-usa" />;
}
