import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-official');
}

export default function FreshStartTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-official" />;
}
