import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-official');
}

export default function LowrateTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-official" />;
}
