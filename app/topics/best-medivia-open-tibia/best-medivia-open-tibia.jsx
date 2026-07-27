import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-open-tibia');
}

export default function BestMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-open-tibia" />;
}
