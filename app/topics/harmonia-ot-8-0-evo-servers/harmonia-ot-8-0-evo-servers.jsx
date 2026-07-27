import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-evo-servers');
}

export default function HarmoniaOt80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-evo-servers" />;
}
