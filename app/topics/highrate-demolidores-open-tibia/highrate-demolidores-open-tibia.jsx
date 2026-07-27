import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-open-tibia');
}

export default function HighrateDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-open-tibia" />;
}
