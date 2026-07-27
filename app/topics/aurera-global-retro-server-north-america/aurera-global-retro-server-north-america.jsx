import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-north-america');
}

export default function AureraGlobalRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-north-america" />;
}
