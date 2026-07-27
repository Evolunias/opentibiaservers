import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-sweden-server');
}

export default function AureraGlobalSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-sweden-server" />;
}
