import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-poland-servers');
}

export default function CalmeraOtPolandServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-poland-servers" />;
}
