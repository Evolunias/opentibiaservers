import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-client');
}

export default function PopularAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-client" />;
}
