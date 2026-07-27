import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-evo-servers');
}

export default function Originaltibia11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-evo-servers" />;
}
