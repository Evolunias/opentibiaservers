import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-tibia');
}

export default function BestRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-tibia" />;
}
