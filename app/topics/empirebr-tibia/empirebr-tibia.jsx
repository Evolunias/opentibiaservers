import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-tibia');
}

export default function EmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-tibia" />;
}
