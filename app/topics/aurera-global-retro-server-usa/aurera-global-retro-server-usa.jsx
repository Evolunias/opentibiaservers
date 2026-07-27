import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-usa');
}

export default function AureraGlobalRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-usa" />;
}
