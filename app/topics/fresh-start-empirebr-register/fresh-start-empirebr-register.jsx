import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-register');
}

export default function FreshStartEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-register" />;
}
