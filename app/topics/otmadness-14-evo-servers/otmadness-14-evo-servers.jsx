import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-evo-servers');
}

export default function Otmadness14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-evo-servers" />;
}
