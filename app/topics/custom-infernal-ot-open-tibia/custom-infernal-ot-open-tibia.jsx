import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-open-tibia');
}

export default function CustomInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-open-tibia" />;
}
