import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-open-tibia');
}

export default function ActiveEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-open-tibia" />;
}
