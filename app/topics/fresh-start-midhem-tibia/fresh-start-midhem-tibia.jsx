import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-tibia');
}

export default function FreshStartMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-tibia" />;
}
