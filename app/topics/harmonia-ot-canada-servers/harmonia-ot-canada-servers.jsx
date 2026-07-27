import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-canada-servers');
}

export default function HarmoniaOtCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-canada-servers" />;
}
