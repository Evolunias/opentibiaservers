import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr');
}

export default function CustomEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr" />;
}
