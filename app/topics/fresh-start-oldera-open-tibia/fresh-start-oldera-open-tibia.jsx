import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-open-tibia');
}

export default function FreshStartOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-open-tibia" />;
}
