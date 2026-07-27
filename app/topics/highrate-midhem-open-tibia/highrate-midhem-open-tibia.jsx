import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-open-tibia');
}

export default function HighrateMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-open-tibia" />;
}
