import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-98-evo-servers');
}

export default function HarmoniaOt1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-98-evo-servers" />;
}
