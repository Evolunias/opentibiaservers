import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-open-tibia');
}

export default function NewOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-open-tibia" />;
}
