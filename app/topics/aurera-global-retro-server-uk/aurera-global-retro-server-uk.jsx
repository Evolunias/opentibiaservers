import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-uk');
}

export default function AureraGlobalRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-uk" />;
}
