import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-poland-servers');
}

export default function AureraGlobalPolandServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-poland-servers" />;
}
