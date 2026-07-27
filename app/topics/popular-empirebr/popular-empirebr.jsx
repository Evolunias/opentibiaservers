import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr');
}

export default function PopularEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr" />;
}
