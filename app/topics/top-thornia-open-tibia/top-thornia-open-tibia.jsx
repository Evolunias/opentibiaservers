import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-open-tibia');
}

export default function TopThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-open-tibia" />;
}
