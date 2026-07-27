import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-open-tibia');
}

export default function FreshStartMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-open-tibia" />;
}
