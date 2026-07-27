import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-open-tibia');
}

export default function BestOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-open-tibia" />;
}
