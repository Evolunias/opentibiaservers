import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-tibia');
}

export default function CustomMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-tibia" />;
}
