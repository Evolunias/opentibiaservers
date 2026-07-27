import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-usa-servers');
}

export default function CalmeraOtUsaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-usa-servers" />;
}
