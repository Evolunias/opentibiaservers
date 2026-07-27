import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-evo-server');
}

export default function HarmoniaOt12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-evo-server" />;
}
