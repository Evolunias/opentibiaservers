import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-guide');
}

export default function NewEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-guide" />;
}
