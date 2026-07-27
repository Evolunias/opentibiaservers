import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-open-tibia');
}

export default function NewInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-open-tibia" />;
}
