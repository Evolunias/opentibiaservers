import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-evo-servers');
}

export default function Otmadness80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-evo-servers" />;
}
