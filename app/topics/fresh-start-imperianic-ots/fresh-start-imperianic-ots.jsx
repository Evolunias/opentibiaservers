import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-ots');
}

export default function FreshStartImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-ots" />;
}
