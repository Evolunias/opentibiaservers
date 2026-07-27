import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-ots');
}

export default function CurrentEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-ots" />;
}
