import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-open-tibia');
}

export default function BestImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-open-tibia" />;
}
