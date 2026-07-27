import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-fresh-start-server');
}

export default function HarmoniaOt772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-fresh-start-server" />;
}
