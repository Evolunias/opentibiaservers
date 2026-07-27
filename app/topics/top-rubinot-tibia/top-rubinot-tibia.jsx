import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-tibia');
}

export default function TopRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-tibia" />;
}
