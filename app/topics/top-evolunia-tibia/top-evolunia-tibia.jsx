import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-tibia');
}

export default function TopEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-tibia" />;
}
