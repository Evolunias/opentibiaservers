import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-europe-servers');
}

export default function AureraGlobalEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-europe-servers" />;
}
