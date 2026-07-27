import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-tibia');
}

export default function TopMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-tibia" />;
}
