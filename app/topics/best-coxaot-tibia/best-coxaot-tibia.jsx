import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-tibia');
}

export default function BestCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-tibia" />;
}
