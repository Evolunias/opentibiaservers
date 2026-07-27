import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-evo-servers');
}

export default function HarmoniaOt71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-evo-servers" />;
}
