import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-login');
}

export default function NewSeasonBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-login" />;
}
