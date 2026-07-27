import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-open-tibia');
}

export default function BestEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-open-tibia" />;
}
