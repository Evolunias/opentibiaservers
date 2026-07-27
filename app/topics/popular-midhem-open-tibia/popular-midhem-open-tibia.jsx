import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-open-tibia');
}

export default function PopularMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-open-tibia" />;
}
