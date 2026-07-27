import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-evo-servers');
}

export default function Originaltibia12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-evo-servers" />;
}
