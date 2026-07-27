import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-tibia');
}

export default function PopularCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-tibia" />;
}
