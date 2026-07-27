import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-brazil');
}

export default function HarmoniaOtFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-brazil" />;
}
