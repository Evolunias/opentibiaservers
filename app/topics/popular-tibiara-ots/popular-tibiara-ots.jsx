import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-ots');
}

export default function PopularTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-ots" />;
}
