import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-tibia');
}

export default function BestImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-tibia" />;
}
