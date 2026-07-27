import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-open-tibia');
}

export default function BestCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-open-tibia" />;
}
