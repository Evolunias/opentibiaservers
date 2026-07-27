import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-open-tibia');
}

export default function ActiveRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-open-tibia" />;
}
