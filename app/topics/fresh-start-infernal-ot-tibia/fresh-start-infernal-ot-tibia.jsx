import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-tibia');
}

export default function FreshStartInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-tibia" />;
}
