import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-evo-servers');
}

export default function Noxiousot12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-evo-servers" />;
}
