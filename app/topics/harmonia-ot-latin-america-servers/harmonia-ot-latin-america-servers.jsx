import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-latin-america-servers');
}

export default function HarmoniaOtLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-latin-america-servers" />;
}
