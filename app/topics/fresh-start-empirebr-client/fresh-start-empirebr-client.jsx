import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-client');
}

export default function FreshStartEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-client" />;
}
