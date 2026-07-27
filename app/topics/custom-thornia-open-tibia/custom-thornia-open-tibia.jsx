import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-open-tibia');
}

export default function CustomThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-open-tibia" />;
}
