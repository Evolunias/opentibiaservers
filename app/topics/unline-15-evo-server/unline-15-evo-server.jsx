import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-evo-server');
}

export default function Unline15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-evo-server" />;
}
