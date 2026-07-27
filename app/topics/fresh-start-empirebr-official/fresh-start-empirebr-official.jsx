import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-official');
}

export default function FreshStartEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-official" />;
}
