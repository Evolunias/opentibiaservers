import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-open-tibia');
}

export default function TopEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-open-tibia" />;
}
