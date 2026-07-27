import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-client');
}

export default function PopularEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-client" />;
}
