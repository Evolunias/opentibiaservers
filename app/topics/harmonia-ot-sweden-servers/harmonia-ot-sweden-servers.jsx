import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-sweden-servers');
}

export default function HarmoniaOtSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-sweden-servers" />;
}
