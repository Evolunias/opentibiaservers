import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-login');
}

export default function PopularEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-login" />;
}
