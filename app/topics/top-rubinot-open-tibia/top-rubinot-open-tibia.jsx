import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-open-tibia');
}

export default function TopRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-open-tibia" />;
}
