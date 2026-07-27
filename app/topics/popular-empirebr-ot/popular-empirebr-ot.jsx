import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-ot');
}

export default function PopularEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-ot" />;
}
