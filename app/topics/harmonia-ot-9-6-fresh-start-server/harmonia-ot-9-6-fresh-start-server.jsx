import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-fresh-start-server');
}

export default function HarmoniaOt96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-fresh-start-server" />;
}
