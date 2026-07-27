import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-open-tibia');
}

export default function NewOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-open-tibia" />;
}
