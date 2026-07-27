import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-tibia');
}

export default function ActiveEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-tibia" />;
}
