import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-tibia');
}

export default function FreshStartOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-tibia" />;
}
