import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-tibia');
}

export default function ActiveRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-tibia" />;
}
