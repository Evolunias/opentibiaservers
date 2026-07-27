import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr');
}

export default function NewEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr" />;
}
