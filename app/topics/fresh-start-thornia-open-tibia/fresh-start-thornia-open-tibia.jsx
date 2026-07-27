import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-open-tibia');
}

export default function FreshStartThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-open-tibia" />;
}
