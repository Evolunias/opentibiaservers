import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-evo-servers');
}

export default function Originaltibia96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-evo-servers" />;
}
