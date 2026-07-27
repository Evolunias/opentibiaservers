import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-tibia');
}

export default function BestEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-tibia" />;
}
