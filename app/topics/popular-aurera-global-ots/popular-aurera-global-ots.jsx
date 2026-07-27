import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-ots');
}

export default function PopularAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-ots" />;
}
