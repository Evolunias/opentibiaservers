import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-evo-servers');
}

export default function AureraGlobal12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-evo-servers" />;
}
