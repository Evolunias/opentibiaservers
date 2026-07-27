import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-open-tibia');
}

export default function EmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-open-tibia" />;
}
