import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-evo-servers');
}

export default function Originaltibia71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-evo-servers" />;
}
