import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-guide');
}

export default function PopularEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-guide" />;
}
