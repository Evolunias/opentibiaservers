import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-login');
}

export default function CustomEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-login" />;
}
