import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-client');
}

export default function BestAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-client" />;
}
