import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-open-tibia');
}

export default function BestRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-open-tibia" />;
}
