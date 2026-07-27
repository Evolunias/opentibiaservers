import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-open-tibia');
}

export default function CustomRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-open-tibia" />;
}
