import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-tibia');
}

export default function InfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-tibia" />;
}
