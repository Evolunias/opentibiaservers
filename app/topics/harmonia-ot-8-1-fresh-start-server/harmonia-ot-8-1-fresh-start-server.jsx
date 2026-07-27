import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-fresh-start-server');
}

export default function HarmoniaOt81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-fresh-start-server" />;
}
