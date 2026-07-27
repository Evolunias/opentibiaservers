import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-tibia');
}

export default function BestNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-tibia" />;
}
