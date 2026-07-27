import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-server');
}

export default function AureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-server" />;
}
