import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-open-tibia');
}

export default function BestNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-open-tibia" />;
}
