import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-fresh-start-server-france');
}

export default function AureraGlobalFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-fresh-start-server-france" />;
}
