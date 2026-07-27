import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-client');
}

export default function AureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-client" />;
}
