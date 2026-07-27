import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-official');
}

export default function CurrentTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-official" />;
}
