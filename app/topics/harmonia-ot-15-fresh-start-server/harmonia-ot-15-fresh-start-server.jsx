import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-fresh-start-server');
}

export default function HarmoniaOt15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-fresh-start-server" />;
}
