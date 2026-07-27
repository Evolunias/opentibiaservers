import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-ot');
}

export default function PopularAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-ot" />;
}
