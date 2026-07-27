import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-poland');
}

export default function HarmoniaOtFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-poland" />;
}
