import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-poland');
}

export default function FreshStartOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-poland" />;
}
