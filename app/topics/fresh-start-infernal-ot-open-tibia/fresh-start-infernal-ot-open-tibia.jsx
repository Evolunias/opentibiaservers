import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-open-tibia');
}

export default function FreshStartInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-open-tibia" />;
}
