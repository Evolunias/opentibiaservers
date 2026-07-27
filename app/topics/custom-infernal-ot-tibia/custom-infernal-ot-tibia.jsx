import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-tibia');
}

export default function CustomInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-tibia" />;
}
