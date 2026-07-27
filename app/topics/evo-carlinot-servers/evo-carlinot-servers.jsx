import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-carlinot-servers');
}

export default function EvoCarlinotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-carlinot-servers" />;
}
