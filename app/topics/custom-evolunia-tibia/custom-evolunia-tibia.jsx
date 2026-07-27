import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-tibia');
}

export default function CustomEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-tibia" />;
}
