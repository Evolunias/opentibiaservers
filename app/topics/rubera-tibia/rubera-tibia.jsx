import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-tibia');
}

export default function RuberaTibiaKeywordPage() {
  return <StaticKeywordPage slug="rubera-tibia" />;
}
