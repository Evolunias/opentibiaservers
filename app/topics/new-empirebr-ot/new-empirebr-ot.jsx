import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-ot');
}

export default function NewEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-ot" />;
}
