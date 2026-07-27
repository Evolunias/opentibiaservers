import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-ots');
}

export default function PopularImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-ots" />;
}
