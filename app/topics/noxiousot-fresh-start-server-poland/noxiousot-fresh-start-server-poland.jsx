import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-poland');
}

export default function NoxiousotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-poland" />;
}
