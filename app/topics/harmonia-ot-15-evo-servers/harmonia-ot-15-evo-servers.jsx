import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-evo-servers');
}

export default function HarmoniaOt15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-evo-servers" />;
}
