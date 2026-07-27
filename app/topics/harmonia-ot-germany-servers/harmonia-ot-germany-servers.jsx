import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-germany-servers');
}

export default function HarmoniaOtGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-germany-servers" />;
}
