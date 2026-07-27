import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-germany');
}

export default function AureraGlobalRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-germany" />;
}
