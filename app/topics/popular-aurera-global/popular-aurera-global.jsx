import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global');
}

export default function PopularAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global" />;
}
