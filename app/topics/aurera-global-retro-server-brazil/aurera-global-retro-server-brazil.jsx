import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-brazil');
}

export default function AureraGlobalRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-brazil" />;
}
