import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-sweden-servers');
}

export default function AureraGlobalSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-sweden-servers" />;
}
