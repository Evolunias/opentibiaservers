import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-chile-servers');
}

export default function HarmoniaOtChileServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-chile-servers" />;
}
