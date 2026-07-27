import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-germany');
}

export default function FreshStartOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-germany" />;
}
