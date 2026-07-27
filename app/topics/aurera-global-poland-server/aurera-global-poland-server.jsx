import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-poland-server');
}

export default function AureraGlobalPolandServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-poland-server" />;
}
