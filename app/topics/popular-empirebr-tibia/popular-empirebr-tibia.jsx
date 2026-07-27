import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-tibia');
}

export default function PopularEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-tibia" />;
}
