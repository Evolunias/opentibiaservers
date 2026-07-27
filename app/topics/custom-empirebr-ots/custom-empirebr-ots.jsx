import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-ots');
}

export default function CustomEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-ots" />;
}
