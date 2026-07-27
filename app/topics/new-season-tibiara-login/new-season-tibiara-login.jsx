import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-login');
}

export default function NewSeasonTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-login" />;
}
