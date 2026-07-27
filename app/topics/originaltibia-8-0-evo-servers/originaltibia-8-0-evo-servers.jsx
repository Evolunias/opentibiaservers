import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-evo-servers');
}

export default function Originaltibia80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-evo-servers" />;
}
