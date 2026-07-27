import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-uk');
}

export default function FreshStartOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-uk" />;
}
