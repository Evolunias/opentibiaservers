import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-germany');
}

export default function HarmoniaOtFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-germany" />;
}
