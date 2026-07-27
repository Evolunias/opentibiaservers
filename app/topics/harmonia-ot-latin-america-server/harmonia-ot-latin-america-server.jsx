import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-latin-america-server');
}

export default function HarmoniaOtLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-latin-america-server" />;
}
