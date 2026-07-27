import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-tibia');
}

export default function RubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-tibia" />;
}
