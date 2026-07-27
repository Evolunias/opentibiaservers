import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-ots');
}

export default function FreshStartElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-ots" />;
}
