import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-open-tibia');
}

export default function TopMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-open-tibia" />;
}
