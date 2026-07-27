import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-brazil');
}

export default function HarmoniaOtPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-brazil" />;
}
