import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-europe');
}

export default function FreshStartOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-europe" />;
}
