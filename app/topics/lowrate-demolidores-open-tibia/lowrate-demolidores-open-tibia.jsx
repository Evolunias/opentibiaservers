import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-open-tibia');
}

export default function LowrateDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-open-tibia" />;
}
