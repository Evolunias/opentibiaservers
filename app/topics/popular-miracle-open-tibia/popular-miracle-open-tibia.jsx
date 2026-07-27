import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-open-tibia');
}

export default function PopularMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-open-tibia" />;
}
