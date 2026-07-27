import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-argentina-servers');
}

export default function CalmeraOtArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-argentina-servers" />;
}
