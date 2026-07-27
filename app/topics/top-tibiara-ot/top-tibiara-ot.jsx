import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-ot');
}

export default function TopTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-ot" />;
}
