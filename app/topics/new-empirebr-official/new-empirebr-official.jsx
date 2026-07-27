import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-official');
}

export default function NewEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-official" />;
}
