import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-tibia');
}

export default function ActiveThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-tibia" />;
}
