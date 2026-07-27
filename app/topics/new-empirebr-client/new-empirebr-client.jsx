import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-client');
}

export default function NewEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-client" />;
}
