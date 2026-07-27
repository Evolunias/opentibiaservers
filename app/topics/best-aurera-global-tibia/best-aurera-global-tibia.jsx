import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-tibia');
}

export default function BestAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-tibia" />;
}
