import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-open-tibia');
}

export default function CustomCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-open-tibia" />;
}
