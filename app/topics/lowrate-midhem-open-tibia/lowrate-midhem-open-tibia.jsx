import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-open-tibia');
}

export default function LowrateMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-open-tibia" />;
}
