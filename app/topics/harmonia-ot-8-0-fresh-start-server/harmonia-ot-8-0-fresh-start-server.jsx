import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-fresh-start-server');
}

export default function HarmoniaOt80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-fresh-start-server" />;
}
