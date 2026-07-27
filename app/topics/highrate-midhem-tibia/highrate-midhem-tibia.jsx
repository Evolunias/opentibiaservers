import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-tibia');
}

export default function HighrateMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-tibia" />;
}
