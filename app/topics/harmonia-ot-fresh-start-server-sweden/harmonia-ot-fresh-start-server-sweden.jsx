import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-sweden');
}

export default function HarmoniaOtFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-sweden" />;
}
