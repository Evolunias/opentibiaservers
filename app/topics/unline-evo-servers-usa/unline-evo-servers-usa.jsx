import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-servers-usa');
}

export default function UnlineEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-servers-usa" />;
}
