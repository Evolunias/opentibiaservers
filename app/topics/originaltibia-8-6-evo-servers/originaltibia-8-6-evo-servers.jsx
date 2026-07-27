import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-evo-servers');
}

export default function Originaltibia86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-evo-servers" />;
}
