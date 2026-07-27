import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-tibia');
}

export default function NewEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-tibia" />;
}
