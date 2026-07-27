import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-open-tibia');
}

export default function PopularCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-open-tibia" />;
}
