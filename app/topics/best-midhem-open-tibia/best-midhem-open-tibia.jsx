import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-open-tibia');
}

export default function BestMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-open-tibia" />;
}
