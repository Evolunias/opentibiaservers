import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-open-tibia');
}

export default function FreshStartOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-open-tibia" />;
}
