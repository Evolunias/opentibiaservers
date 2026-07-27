import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-usa');
}

export default function UnlineEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-usa" />;
}
