import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-open-tibia');
}

export default function ActiveCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-open-tibia" />;
}
