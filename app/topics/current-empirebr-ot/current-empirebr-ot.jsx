import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-ot');
}

export default function CurrentEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-ot" />;
}
