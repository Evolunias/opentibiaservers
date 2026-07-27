import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-sweden-servers');
}

export default function CalmeraOtSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-sweden-servers" />;
}
