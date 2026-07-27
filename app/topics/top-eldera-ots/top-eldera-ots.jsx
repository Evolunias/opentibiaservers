import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-ots');
}

export default function TopElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-ots" />;
}
