import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-south-america-servers');
}

export default function HarmoniaOtSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-south-america-servers" />;
}
