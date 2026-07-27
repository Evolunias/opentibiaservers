import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-tibia');
}

export default function HighrateDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-tibia" />;
}
