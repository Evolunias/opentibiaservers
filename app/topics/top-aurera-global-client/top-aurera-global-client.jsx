import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-client');
}

export default function TopAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-client" />;
}
