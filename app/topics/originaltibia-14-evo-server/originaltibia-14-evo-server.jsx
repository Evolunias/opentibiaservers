import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-evo-server');
}

export default function Originaltibia14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-evo-server" />;
}
