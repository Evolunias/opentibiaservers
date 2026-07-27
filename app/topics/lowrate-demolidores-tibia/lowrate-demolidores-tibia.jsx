import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-tibia');
}

export default function LowrateDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-tibia" />;
}
