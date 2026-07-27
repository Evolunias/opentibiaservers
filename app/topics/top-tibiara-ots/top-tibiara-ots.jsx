import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-ots');
}

export default function TopTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-ots" />;
}
