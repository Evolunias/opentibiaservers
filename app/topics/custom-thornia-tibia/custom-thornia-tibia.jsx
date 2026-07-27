import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-tibia');
}

export default function CustomThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-tibia" />;
}
