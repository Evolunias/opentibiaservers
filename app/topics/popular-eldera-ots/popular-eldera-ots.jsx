import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-ots');
}

export default function PopularElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-ots" />;
}
