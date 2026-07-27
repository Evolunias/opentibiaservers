import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-tibia');
}

export default function TopEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-tibia" />;
}
