import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-open-tibia');
}

export default function InfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-open-tibia" />;
}
