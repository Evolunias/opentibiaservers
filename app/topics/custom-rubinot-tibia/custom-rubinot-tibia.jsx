import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-tibia');
}

export default function CustomRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-tibia" />;
}
