import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-canada');
}

export default function AureraGlobalRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-canada" />;
}
