import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-tibia');
}

export default function LowrateTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-tibia" />;
}
