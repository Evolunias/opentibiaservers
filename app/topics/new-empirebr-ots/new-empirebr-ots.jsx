import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-ots');
}

export default function NewEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-ots" />;
}
