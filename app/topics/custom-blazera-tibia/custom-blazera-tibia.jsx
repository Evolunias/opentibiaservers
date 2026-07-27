import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-tibia');
}

export default function CustomBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-tibia" />;
}
