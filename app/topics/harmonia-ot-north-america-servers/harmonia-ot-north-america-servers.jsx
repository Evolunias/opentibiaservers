import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-north-america-servers');
}

export default function HarmoniaOtNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-north-america-servers" />;
}
