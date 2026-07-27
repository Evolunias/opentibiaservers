import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-tibia');
}

export default function NewBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-tibia" />;
}
