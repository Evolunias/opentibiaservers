import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-open-tibia');
}

export default function FreshStartHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-open-tibia" />;
}
