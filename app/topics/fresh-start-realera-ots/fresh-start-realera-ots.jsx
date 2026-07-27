import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-ots');
}

export default function FreshStartRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-ots" />;
}
