import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-tibia');
}

export default function LowrateMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-tibia" />;
}
