import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-official');
}

export default function PopularEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-official" />;
}
