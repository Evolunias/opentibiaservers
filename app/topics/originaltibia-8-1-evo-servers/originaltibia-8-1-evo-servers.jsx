import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-evo-servers');
}

export default function Originaltibia81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-evo-servers" />;
}
