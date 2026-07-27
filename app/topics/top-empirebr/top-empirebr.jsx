import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr');
}

export default function TopEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr" />;
}
