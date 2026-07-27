import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-tibia');
}

export default function BestMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-tibia" />;
}
