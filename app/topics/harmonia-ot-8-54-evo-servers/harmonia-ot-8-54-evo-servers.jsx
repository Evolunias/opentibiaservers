import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-evo-servers');
}

export default function HarmoniaOt854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-evo-servers" />;
}
