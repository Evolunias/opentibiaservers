import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-tibia');
}

export default function FreshStartHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-tibia" />;
}
