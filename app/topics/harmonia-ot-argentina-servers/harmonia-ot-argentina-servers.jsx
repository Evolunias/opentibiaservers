import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-argentina-servers');
}

export default function HarmoniaOtArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-argentina-servers" />;
}
