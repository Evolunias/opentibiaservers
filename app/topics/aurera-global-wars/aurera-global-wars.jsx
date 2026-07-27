import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-wars');
}

export default function AureraGlobalWarsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-wars" />;
}
