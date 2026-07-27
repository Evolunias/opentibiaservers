import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-ot');
}

export default function CustomEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-ot" />;
}
