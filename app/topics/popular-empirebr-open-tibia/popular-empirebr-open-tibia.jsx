import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-open-tibia');
}

export default function PopularEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-open-tibia" />;
}
