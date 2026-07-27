import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr');
}

export default function FreshStartEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr" />;
}
