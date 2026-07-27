import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-ots');
}

export default function PopularEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-ots" />;
}
