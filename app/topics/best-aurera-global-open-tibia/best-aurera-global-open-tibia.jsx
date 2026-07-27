import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-open-tibia');
}

export default function BestAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-open-tibia" />;
}
