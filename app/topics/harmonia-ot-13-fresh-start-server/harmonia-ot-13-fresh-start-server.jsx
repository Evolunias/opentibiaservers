import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-fresh-start-server');
}

export default function HarmoniaOt13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-fresh-start-server" />;
}
