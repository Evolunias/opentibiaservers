import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-tibia');
}

export default function IsaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="isara-tibia" />;
}
