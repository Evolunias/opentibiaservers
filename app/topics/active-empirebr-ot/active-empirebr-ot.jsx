import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-ot');
}

export default function ActiveEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-ot" />;
}
