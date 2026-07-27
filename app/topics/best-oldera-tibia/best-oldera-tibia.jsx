import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-tibia');
}

export default function BestOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-tibia" />;
}
