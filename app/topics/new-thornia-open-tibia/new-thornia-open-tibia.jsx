import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-open-tibia');
}

export default function NewThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-open-tibia" />;
}
