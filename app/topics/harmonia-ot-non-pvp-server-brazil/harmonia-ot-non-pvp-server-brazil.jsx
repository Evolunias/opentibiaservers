import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-non-pvp-server-brazil');
}

export default function HarmoniaOtNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-non-pvp-server-brazil" />;
}
