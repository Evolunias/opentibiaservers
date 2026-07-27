import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-tibia');
}

export default function FreshStartRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-tibia" />;
}
