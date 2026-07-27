import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-europe');
}

export default function AureraGlobalRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-europe" />;
}
