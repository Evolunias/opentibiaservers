import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-evo-servers');
}

export default function Originaltibia15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-evo-servers" />;
}
