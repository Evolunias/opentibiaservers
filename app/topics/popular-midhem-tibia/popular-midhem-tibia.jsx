import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-tibia');
}

export default function PopularMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-tibia" />;
}
