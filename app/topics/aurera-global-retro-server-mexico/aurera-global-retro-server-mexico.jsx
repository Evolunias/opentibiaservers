import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-mexico');
}

export default function AureraGlobalRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-mexico" />;
}
