import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-evo-servers');
}

export default function Noxiousot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-evo-servers" />;
}
