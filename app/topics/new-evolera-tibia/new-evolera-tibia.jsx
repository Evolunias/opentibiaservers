import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-tibia');
}

export default function NewEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-tibia" />;
}
