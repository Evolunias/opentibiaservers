import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-usa-servers');
}

export default function AureraGlobalUsaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-usa-servers" />;
}
