import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-open-tibia');
}

export default function NewCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-open-tibia" />;
}
