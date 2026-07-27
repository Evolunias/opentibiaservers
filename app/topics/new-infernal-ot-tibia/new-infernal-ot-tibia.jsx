import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-tibia');
}

export default function NewInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-tibia" />;
}
