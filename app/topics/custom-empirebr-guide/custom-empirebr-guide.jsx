import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-guide');
}

export default function CustomEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-guide" />;
}
