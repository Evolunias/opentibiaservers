import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-open-tibia');
}

export default function ThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="thornia-open-tibia" />;
}
