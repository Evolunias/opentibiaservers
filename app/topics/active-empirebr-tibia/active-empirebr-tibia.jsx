import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-tibia');
}

export default function ActiveEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-tibia" />;
}
