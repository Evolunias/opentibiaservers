import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-tibia');
}

export default function CustomCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-tibia" />;
}
