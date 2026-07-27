import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-usa-servers');
}

export default function HarmoniaOtUsaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-usa-servers" />;
}
