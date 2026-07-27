import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-fresh-start-server');
}

export default function HarmoniaOt100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-fresh-start-server" />;
}
