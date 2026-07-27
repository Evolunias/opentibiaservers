import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-fresh-start-server');
}

export default function HarmoniaOt71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-fresh-start-server" />;
}
