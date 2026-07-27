import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-ots');
}

export default function PopularRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-ots" />;
}
