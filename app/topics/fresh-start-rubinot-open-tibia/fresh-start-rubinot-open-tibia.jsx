import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-open-tibia');
}

export default function FreshStartRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-open-tibia" />;
}
