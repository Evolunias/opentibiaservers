import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-official');
}

export default function BestEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-official" />;
}
