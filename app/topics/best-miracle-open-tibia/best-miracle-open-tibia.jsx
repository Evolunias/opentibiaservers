import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-open-tibia');
}

export default function BestMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-open-tibia" />;
}
