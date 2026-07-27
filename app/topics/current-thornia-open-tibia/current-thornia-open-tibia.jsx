import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-open-tibia');
}

export default function CurrentThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-open-tibia" />;
}
