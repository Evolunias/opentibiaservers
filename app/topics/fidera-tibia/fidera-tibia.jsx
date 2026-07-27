import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-tibia');
}

export default function FideraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fidera-tibia" />;
}
