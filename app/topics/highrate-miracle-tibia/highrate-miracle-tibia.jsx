import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-tibia');
}

export default function HighrateMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-tibia" />;
}
