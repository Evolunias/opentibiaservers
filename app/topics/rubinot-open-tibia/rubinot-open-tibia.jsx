import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-open-tibia');
}

export default function RubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-open-tibia" />;
}
