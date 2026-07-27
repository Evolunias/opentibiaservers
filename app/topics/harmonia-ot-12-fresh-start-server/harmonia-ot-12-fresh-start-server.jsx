import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-fresh-start-server');
}

export default function HarmoniaOt12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-fresh-start-server" />;
}
