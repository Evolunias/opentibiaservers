import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-official');
}

export default function CurrentEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-official" />;
}
