import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-guide');
}

export default function FreshStartEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-guide" />;
}
