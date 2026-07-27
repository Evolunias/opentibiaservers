import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-north-america');
}

export default function HarmoniaOtFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-north-america" />;
}
