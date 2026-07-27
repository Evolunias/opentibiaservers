import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-ots');
}

export default function FreshStartEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-ots" />;
}
