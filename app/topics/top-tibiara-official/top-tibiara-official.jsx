import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-official');
}

export default function TopTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-official" />;
}
