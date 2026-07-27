import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-tibia');
}

export default function NewOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-tibia" />;
}
