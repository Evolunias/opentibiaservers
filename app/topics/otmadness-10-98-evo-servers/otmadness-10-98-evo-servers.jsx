import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-98-evo-servers');
}

export default function Otmadness1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-98-evo-servers" />;
}
