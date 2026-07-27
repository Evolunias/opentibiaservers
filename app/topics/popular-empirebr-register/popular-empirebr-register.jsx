import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-register');
}

export default function PopularEmpirebrRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-register" />;
}
