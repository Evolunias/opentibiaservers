import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr');
}

export default function CurrentEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr" />;
}
