import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-fresh-start-server-europe');
}

export default function AureraGlobalFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-fresh-start-server-europe" />;
}
